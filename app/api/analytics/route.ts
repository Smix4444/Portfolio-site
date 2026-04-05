import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const referrer = typeof body?.referrer === 'string'
      ? body.referrer.slice(0, 500)   // cap length — no unbounded input
      : 'unknown';

    const supabase = createServerClient();
    await supabase.from('page_views').insert({ referrer });

    return NextResponse.json({ ok: true });
  } catch {
    // Silently fail — analytics must never break the site
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

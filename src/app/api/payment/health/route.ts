import { getPaymentHealth } from '@/payment/health';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(getPaymentHealth());
}

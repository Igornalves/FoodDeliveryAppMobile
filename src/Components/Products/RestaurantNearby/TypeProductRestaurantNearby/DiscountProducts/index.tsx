import React from 'react';
import { ConteinerDiscountWithPay, ConteinerPay, TextDiscount, TextPay } from '../style';

export default function DiscountProducts() {
  return (
    <ConteinerDiscountWithPay>
        <TextDiscount>20%off</TextDiscount>
        <ConteinerPay>
            <TextPay>Up to $10.25</TextPay>
        </ConteinerPay>
    </ConteinerDiscountWithPay>
  );
}

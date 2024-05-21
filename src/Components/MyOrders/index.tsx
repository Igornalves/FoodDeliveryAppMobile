import React from 'react';
import { Conteiner } from './style';
import TypeMyOrders from './TypeMyOrders';

export default function MyOrders() {
  return (
    <Conteiner>
       <TypeMyOrders
        images='https://png.pngtree.com/png-clipart/20231003/original/pngtree-pizza-pizza-png-pizza-ai-generated-png-image_13245850.png'
        TextTitule1='Spice Haven'
        TextTitule2='Biryani'
        DateO='21 Nov 2022'
        ItensO='2 Items'
        PayO='$150.00'
        IdOrderO='OrderId:#123215'
       />
       <TypeMyOrders
        images='https://png.pngtree.com/png-vector/20240202/ourlarge/pngtree-donuts-with-sugar-png-image_11531306.png'
        TextTitule1='Golder Glaze'
        TextTitule2='Delight'
        DateO='23 May 2023'
        ItensO='12 Items'
        PayO='$40.35'
        IdOrderO='OrderId:#123215'
       />
       <TypeMyOrders
        images='https://png.pngtree.com/png-clipart/20210418/original/pngtree-a-cup-of-whiskey-png-image_6240901.jpg'
        TextTitule1='Whiskey Drink'
        TextTitule2='Pub heat'
        DateO='20 Dez 2023'
        ItensO='2 Items'
        PayO='$50.69'
        IdOrderO='OrderId:#123215'
       />
       <TypeMyOrders
        images='https://static.vecteezy.com/system/resources/previews/021/665/619/non_2x/beef-burger-isolated-png.png'
        TextTitule1='Bacon Bliss'
        TextTitule2='BombShell'
        DateO='15 Mar 2020'
        ItensO='1 Items'
        PayO='$20.99'
        IdOrderO='OrderId:#123215'
       />
       <TypeMyOrders
        images='https://www.imagensempng.com.br/wp-content/uploads/2021/02/5c2ce626e0321_acai66.png'
        TextTitule1='Ice Creem'
        TextTitule2='Biryani Acai'
        DateO='15 Jan 2021'
        ItensO='2 Items'
        PayO='$15.00'
        IdOrderO='OrderId:#123215'
       />
       <TypeMyOrders
        images='https://www.pngall.com/wp-content/uploads/5/Lasagna-PNG-High-Quality-Image.png'
        TextTitule1='Lasagna Haven'
        TextTitule2='Marvel Snack'
        DateO='25 Abr 2022'
        ItensO='1 Items'
        PayO='$30.25'
        IdOrderO='OrderId:#123215'
       />
    </Conteiner>
  );
}

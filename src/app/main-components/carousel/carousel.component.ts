import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  images = [
    { image: '/sito-capstone/src/assets/img/partner1.png', title: 'Item 1', description: 'Description 1' },
    { image: '/sito-capstone/src/assets/img/partner2.png', title: 'Item 2', description: 'Description 2' },
    { image: '/sito-capstone/src/assets/img/partner3.png', title: 'Item 3', description: 'Description 3' },
    { image: '/sito-capstone/src/assets/img/partner4.png', title: 'Item 4', description: 'Description 4' },
    { image: '/sito-capstone/src/assets/img/partner5.png', title: 'Item 5', description: 'Description 5' }
  ];

}

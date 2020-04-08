import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';
import { PetService } from 'src/app/services/pet.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pet$: Observable<Pet> = this.petService.getPet(this.authSerivice.uid);

  constructor(
    private petService: PetService,
    private authSerivice: AuthService
  ) {}

  ngOnInit(): void {}
}

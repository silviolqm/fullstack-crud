import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}

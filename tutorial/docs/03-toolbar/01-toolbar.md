# Toolbar

```typescript
...
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  ...
  imports: [
    ...
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  ...
})
...
```  

```html  
<mat-toolbar>
  <button mat-icon-button class="botao-menu-loja" aria-label="Botão de Menu">
    <mat-icon>menu</mat-icon>
  </button>
  <span>My App</span>
  <span class="espacamento-dentro-toolbar"></span>
  <mat-icon class="example-icon" aria-hidden="false" aria-label="Example user verified icon">verified_user</mat-icon>
  <button mat-icon-button class="favorite-icon" aria-label="Botão com ícone de coração">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="compartilhamento-icon" aria-label="Botão com ícone de compartilhamento">
    <mat-icon>share</mat-icon>
  </button>
</mat-toolbar>
```  

# @Input() decorator

## 1. Receba o dado no HTML do filho, se este for o local mais interno desejado.
```html ttle="html do filho"
<p>
  Today's item: {{variavelAReceberComoInput_1}}
</p>
<p
  [propriedadeDaTagDoFilho]='variavelAReceberComoInput_2'
</p>
```

## 2. Receba o dado no Typescript do Filho, tanto se este o local interno mais desejado ou se servirá para passar para o HTML dele mesmo.
```typescript
import { Component, Input } from '@angular/core'; // First, import Input
export class ComponnetFilho {
  @Input() variavelAReceberComoInput_1 = '';
  @Input() variavelAReceberComoInput_2 = '';
}
```  

## 3. Indique o dado no HTML do PAI
```html ttle="html do pai"
<tagDoFilho>
  [variavelAReceberComoInput_1]="variavelDefinidaEmTypescritDoPai_1"
  [variavelAReceberComoInput_2]="variavelDefinidaEmTypescritDoPai_2"
</tagDoFilho>
```  

## 3. Defina o dado no Typescript do PAI
```typescript
import { Component, Input } from '@angular/core'; // First, import Input
export class ComponnetFilho {
    variavelDefinidaEmTypescritDoPai_1 = 'dadoPai1';
    variavelDefinidaEmTypescritDoPai_2 = 'dadopai2';
}
```
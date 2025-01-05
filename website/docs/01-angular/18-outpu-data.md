# @Output() Decorator

## 1. Na classe typescript do FILHO, emitir dado:
```typescript
export class ItemOutputComponent {

  ...  

  anyMethod(value: string) {
    this.newItemEvent.emit(value);
  }

  ... 
  
}
``` 

## 2. Na mesma classe typescript do FILHO, definir vari[avel do tipo @Output() que emite o dado]
```typescript
export class ComponenteFilhoQueEnviaDado {

  @Output() acaoFilhoASerIndicadaEmPai = new EventEmitter<string>();

  anyMethod() {
    this.newItemEvent.emit("dadoASerEnviadoComoString");
  }
}
``` 

## 3. No arquivo HTML do PAI, dentro da tag definida para FILHO, ter campo propriedade para recepção do output.
```html title="Na estrutura HTML do filho"
<tag-componente-interno-filho
    (acaoFilhoASerIndicadaEmPai)="metodoEmFilhoQueRecebeDadoDoOutputDeFilho($Event)"
></tag-componente-interno-filho>
```

## 4. Defina a recepção do dado no typescript do PAI.
```typescript
export class ComponenteProcessaDadoRecebido {

  metodoEmFilhoQueRecebeDadoDoOutputDeFilho(dadoRecebidoComoString: string) {
    console.log(dadoRecebidoComoString);
    // Se quiser, use o dado em variável do PAI e depois em HTML do PAI.
  }
}
``` 
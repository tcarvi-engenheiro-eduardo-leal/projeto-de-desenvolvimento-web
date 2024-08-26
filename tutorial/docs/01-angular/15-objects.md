# Data Binding

## Property Data Binding 
```html
ap-photo 
    *ngFor="let photo of photos" 
    [url]="photo.url" 
    [description]="photo.description">
ap-photo
```

## Angular Expression Data Binding 
```html
{{ angularExpression }}
```
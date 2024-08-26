# apollo-angular
- A fully-featured GraphQL client for Angular
- Why and how of using Apollo Angular to build your application.
- Features, which showcase some advanced capabilities of Apollo Angular that your app may need.
- Recipes, to isolate and explain how to do common patterns.

- Apollo is lovingly designed to work nicely with all the tools used by today's Angular developers. Here are some in particular:
- Angular Schematics: Apollo Angular supports ng-add and ng-update
- NativeScript: Apollo works out of the box in NativeScript.
- Angular Router: Apollo Client is completely router-independent, which means you can use it with any version of Angular Router or any other routing - library for Angular. It's even easy to set up server-side rendering.

```bash
ng add apollo-angular
```  
- Repostas:
    - GraphQl API: https://gitlab.com/api/graphql 

- Token
glpat-wB_bquxXcr2fc4vFAiif


- Configuração do httpLink
```typescript
httpLink.create({
      uri: uri,
      headers: new HttpHeaders()
                    .set('Content-Type','application/json')
                    .set('Authorization','Bearer glpat-wB_bquxXcr2fc4vFAiif')
    }),
``` 

## Gerar componente fonte-de-dados
- comando angular

## Inclusão de rota
```typescript
export const routes: Routes = [
  { path: 'fonte-de-dados', component: FonteDeDadosComponent }
];
```  

## inclusáo de query em componente fonte-de-dados:

```typescript
The watchQuery method returns a QueryRef object which has the valueChanges property that is an Observable.

We can see that the result object contains loading, a Boolean indicating if the query is "in-flight." The observable will only emit once when the query is complete, and loading will be set to false unless you set the watchQuery parameters notifyOnNetworkStatusChange to true. Once the query has completed, it will also contain a data object with posts, the field we've picked out in GetPosts operation.

It's also possible to fetch data only once. The query method of Apollo service returns an Observable that also resolves with the same result as above.

Imagine you have two views (routes), one of them has the Posts component. When you switch between views, you'll notice that the list of posts loads instantly the second time. This is the Apollo cache at work!




query {
  project(fullPath: "tcarvi/tcarvi") {
    boards {
      edges {
        node {
          name
        }
      }
    }
    createdAt
    description
    descriptionHtml
    group {
      fullName
    }
    id
    issue {
      title
    }
    labels {
      edges {
        node {
          id
        }
      }
    }
    mergeRequests {
      edges {
        node {
          id
          createdAt
        }
      }
    }
    mergeRequestsAccessLevel {
      integerValue
      stringValue
    }
    milestones {
      edges {
        node {
          id
          title
        }
      }
    }
    name
    nameWithNamespace
    namespace {
      fullName
    }
    openMergeRequestsCount
    openIssuesCount
    projectMembers {
      edges {
        node {
          user {
            name
          }
        }
      }
    }
    visibility
    webUrl
  }
}
```  

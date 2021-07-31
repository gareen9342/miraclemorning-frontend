# miraclemorning-frontend
미라클 모닝 프론트엔드

## 메모

### 참고 링크 
Next.js공식 : //https://nextjs.org/docs/getting-started    

#### pre-rendering
pre-rendering에 관해서 정리되있는 이 글을 한 번 읽어봐야할 듯   
Next.js는 pre-rendering을 함 두 가지 형태다.   
static : recommented, HTML이 빌드 타임때 만들어 지고 **request마다 재사용됨**    
Server-side Rendering : HTML이 **request마다 만들어짐**    

https://nextjs.org/docs/basic-features/pages#pre-rendering    

#### authentication (페이지 접근 제한 등)
샘플 여기서 보기    
https://github.com/vercel/next.js/tree/canary/examples/with-iron-session     

#### Mobx

observable을 사용하면 관찰 가능하게 만들어 줄 수 있다.    

- observable : 추적 가능한 state 정의   
- action : state를 변경하는 메소드   
- computed : state와 캐시로    

observable -> makeObservable, makeAutoObservable, observable 세 가지가 있으면 

makeObservable 은 class의 this와 사용되는편 
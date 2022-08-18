18.08
- Podczas tworzenia tego projektu spotkałem się z potrzebą rozwiązania problemu CORS error
- Udało mi się 'załatać' ten problem poprzez rozszerzenie do przeglądarki CORS extension. Natomiast wiem, że nie rozwiązuje to problemu z deployem projektu. 

- "https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9" 

 -> "But once you publish your application, you can’t expect your users to install the plugin too."

 - Do linku URL dodałem "https://cors-anywhere.herokuapp.com/". Działa, natomiast nie wiem czy finalnie to rozwiąże problem.

 - Podczas tworzenia projektu, spotkałem się z wieloma problemami, które udało mi się rozwiązać poprzez console.log - jest to bardzo potężne narzędzie :). Przykład 1 całą aplikację blokował mi fakt, że podczas deklarowania zmiennej pomyliłem się i nie dodałem '.' do 
 
  family: document.querySelector('family'),

- Obecnie mam problem, podczas wywoływania loopa forEach i iteracji tablicy, do momentu znalezienia, pętla zwraca false, który w if'ie zwraca else
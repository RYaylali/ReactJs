# ReactJs

# cards

--> bulma.io kullanılarak card yapıları oluşturuldu.
<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/cards.PNG)

<br/>

# Stateproje

-->const [teams, setTeams] = useState([]); örnekteki gibi useState kavramını kullanarak propsları tutmayı veya setTeams kullanmaz isek veri her herhangi bir güncellemede kayıp olur. Bu kavramları kullanarak proje kayıtlı olan resimlerden rastgele seçim yapan uygulama tasarladım

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/RastgeleTakım.PNG)

<br/>

# apiimage

<br/>

--> React projelerinde unsplash api kullanarak component yapıları ile input'a girilen değeri arayan bir uygulamadır
<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/apiimage.PNG)

<br/>

# jiraaplication

<br/>

-->Form, UseState ve component yapıları kullanarak örnek bir jira uygulamasıdır. Oluşturulan tasklar listelenmektedir ve bu listedekiler güncelleme ve silme işlemleri uygulana bilir.

- Kullanılan yapılar axios, api olarak json server ile apiye istek atılmış veriler kendi oluşturduğumuz db.json dosyasında json veri olarak tutulmuştur. Use effect kullanılarak kayıt olan taskler kendi projemizde tutularak her component açıldığında api ye isterek atılarak db.json dan verileri getirmiştir.
- json serverde apıyi kaldırmak için : npx json-server --watch api/db.json --port 3004 bunu bi terminalde diğer terminalde ise npm start ile projeyi ayağa kaldır.
- UseContext yapısı kullanılarak context klasörü altında oluşturulan js dosyasında componentlerde kullanılan büütün fonksiyonlar toplandı. Bu yapıyı bütün projede kullanabilmek için index.js de app.js dosyasını çevreledik ve task.js, app.js kapsar hale geldi böylece methodlara projenin bütün her yerinden ulaşıldı. Bu sayede veri taşımak için daha az props kullanımı sağlandı

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/jiraapp.PNG)

<br/>

# kurslarim

<br/>

--> UseState ve component yapıları kullanarak örnek bir kurs uygulamasıdır. db.json dosyasındaki kurslar arasında rastgele geçiş yapılabilir ve yön belirten buttonlar ilede geçiiş yapılabilir

- Kullanılan yapılar axios, api olarak json server ile apiye istek atılmış veriler kendi oluşturduğumuz db.json dosyasında json veri olarak tutulmuştur. Use effect kullanılarak kayıt olan taskler kendi projemizde tutularak her component açıldığında api ye isterek atılarak db.json dan verileri getirmiştir.

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/kurslarim.PNG)

<br/>

# Hamburger

<br/>

--> Routers kullanılarak yönlendirme yapılmış. Material ui Hooks kullanılmıştır.

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/hamburger1.PNG)

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/hamburger2.PNG)

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/hamburger3.PNG)

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/hamburger4.PNG)

<br/>

# formproject

<br/>

--> Formik Yup ve dom kütüphaneleri kullanılmıştır.

<br/>

- Formik kitiphanesi kullanılarak Form yapıları kullanıldı ve yub kütüphanesi ile birlikde validationlar oluşturuldu.

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/yub.PNG)

<br/>

![image](https://github.com/RYaylali/ReactJs/blob/main/ProjeResimleri/yup1.PNG)

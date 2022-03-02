// İlk yaptığımız şey komut satırına npm init ile başlayan komutları tamamlayarak package.json dosyamızı oluşturmak.

// Sonrasında bizim axios kütüphanesini kullanmamız gerektiğini söylüyor yani komut satırına  npm install axios yazıp axios kütüphanesini indirerek axios bağımlılığını oluşturmalıyız. Bu işlemin sonucunda package-lock.json dosyamızın ve node_modules dosyamızın otomatik bir şekilde oluşması gerekiyor.

// İmport etmek için ECMA Script 6'dan önce require kullanırken şu an import kelimesini kullanabiliyoruz. Modulden import işlemini yapabilmek adına yani indirdiğimiz axios kütüphanesini kullanabilmek adına package.json dosyamızda main bölümünün altına "type": "module", yazısını eklememiz gerekiyor. 

// Daha sonra app.js dosyamızı oluşturup bizden istenenleri yapmalıyız.

// axios kütüphanesini import edip getData isimli yeni bir fonksiyon oluşturduk.

// async asengron anlamındadır ve asengron ifadeler await ile birlikte kullanılır await'i axios'un önüne koymasaydık beklemezdi bir sonraki satıra geçerdi yani bilgiler sıralı bir şekilde gelmezdi.

// const users veya posts şeklinde yapsaydık bize anlam veremedğimiz datalar dönerdi bunun nedeni axios bize users ve posts'un altında birer data dönmesi. 

//{data: users}, {data: posts} böyle yaparsak ilgili kullanıcılar bize gelir. hepsi data olarak dönüyor hepsini farklı şekilde sunmak için : ile açıkladık.

//  İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor dediği için back-tick içinde ${number} ifadesini ekledik.

//Sonrasında default "varsayılan" olarak bir javascript verisi nasıl dışarı aktarılır onu yazdık export default getData diyerek.

// İndex.js dosyasında getData'nın içindeki sayı app.js dosyasında verdiğimiz number parametresidir. Yani çekmek istediğin veriye göre parametreyi değiştirebilirsin.

//node_modules dosyasının gözükmemesi için .gitignore dosyasını oluşturup "/node_modules" ekledik.

// sonucun çalışıp çalışmadığına komut satırına node index.js yazarak bakabilirsiniz.
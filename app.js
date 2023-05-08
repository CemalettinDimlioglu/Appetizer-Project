const appetizers = document.querySelectorAll(".panel");

appetizers.forEach((a)=>{
a.addEventListener("click", ()=>{
     removeActive();
     a.classList.add("active");
});

});
function removeActive(){
     appetizers.forEach((a)=>{
          a.classList.remove("active");
     })

}

//Bu kod, belirli bir CSS sınıfına sahip tüm öğeleri seçmek için document.querySelectorAll() yöntemini kullanır. Seçilen öğeler daha sonra bir forEach() döngüsü kullanarak işlenir ve her bir öğe için bir olay dinleyicisi eklenir. Tıklama olayı tetiklendiğinde, önce removeActive() fonksiyonu çağrılır ve tüm öğelerden active sınıfı kaldırılır. Daha sonra, tıklanan öğeye active sınıfı eklenir.removeActive() fonksiyonu, tüm öğeleri seçmek için bir forEach() döngüsü kullanır ve her bir öğeden active sınıfını kaldırır.Bu kod, birçok panel öğesi içeren bir web sayfasında kullanılabilecek bir örnek gösterimdir. Kullanıcı herhangi bir panel öğesine tıkladığında, tüm diğer öğelerden active sınıfı kaldırılır ve yalnızca tıklanan öğe seçili olarak gösterilir.








import React from 'react';
import logo from "../logo.svg";
import woman from "../images/img_femme_corps-morphee.png";
import Header from "../components/header";
import Footer from "../components/footer";


function Effect() {
    return (
        <div id="effect">
            <Header/>
                <div className="effect-content col-12">
                    <div className="col-12 effect-first-content">
                        <div className="woman col-4">
                            <img src={woman} alt="img_femme_corps-morphee"/>
                        </div>
                        <div id="title" className="col-8">
                            <h1>Effets sur le corps</h1>
                            <span className="subtitle"></span>
                            <ul>
                                <li><strong>Usure du cerveau :</strong> lorsque nous dormons, le cerveau régénère les cellules qui lui permettent de “récupérer les énergies” et prévenir les maladies. Si nous ne nous reposons pas assez, il ne peut pas nettoyer les protéines qui provoquent les plaques d’Alzheimer ou la démence.</li>
                                <li><strong>Perte de masse corporelle :</strong> les persones qui se reposent moins de cinq heures par nuit souffrent de réduction de l’Indice de Masse Corporelle. La moyenne que l’on perd tourne autour des 3,6 %. Et cela est dû aux carences des processus métaboliques qui ont lieu la nuit.</li>
                                <li><strong>Désordre alimentaire :</strong> généralement, les personnes qui dorment mal, mangent mal. Quand nous dormons, nous fabriquons la leptine, une hormone qui provoque la satiété et régule la graisse corporelle. Si nous réduisons sa production, les conséquences seront les suivantes. Une alimentation à des heures tardives et une accumulation de la graisse corporelle. Cela favorise en plus le développement de troubles comme l’obésité et le diabète.</li>
                                <li><strong>Manque de réflexes :</strong> le rendement cognitif et la coordination motrice diminuent de façon considérable quand une personne n’a pas suffisamment dormi. Selon la National Highway Traffic Safety Administration (NHTSA, en anglais) des États-Unis, plus de quarante mille personnes souffrent de blessures chaque année. Et ce, à cause de problèmes dus au manque de sommeil.</li>
                                <li><strong>Meilleur rendement :</strong> comme conséquence du manque de lucidité et d’énergie, en dormant peu nous nous exposons à la diminution considérable de nos capacités. Ceux qui ne se reposent pas suffisamment ont tendance à donner moins de résultats dans les milieux professionnel et scolaire.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Effect;
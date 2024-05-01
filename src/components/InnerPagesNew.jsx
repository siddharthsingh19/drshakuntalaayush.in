import React from "react";
import "./InnerPagesNew.css";
import { Link } from "react-router-dom";

const InnerPagesNew = ({ heading, sidemenu, url }) => {
  console.log(heading, sidemenu, url);
  return (
    <>
      <div className="inner-container-new">
        <div className="inner-wrapper-new">
          <div className="left-new">
            {sidemenu.map((item, index) => (
              <div key={index} className="left-map">
                <ul>
                  <Link to={item.url}>
                    <li>{item.title}</li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
          <div className="right-new">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quaerat incidunt laudantium voluptatibus beatae corrupti dolorem
            delectus deleniti quibusdam libero, itaque, id architecto recusandae
            harum cumque quisquam distinctio, ad ducimus? Ea, officiis non.
            Magnam, obcaecati accusantium natus delectus quos assumenda
            officiis, fuga, unde aperiam asperiores enim. Sapiente tempore
            aspernatur iste porro consequuntur qui eveniet non enim natus.
            Tenetur eius illo nemo est rerum ex alias necessitatibus sed
            cupiditate quis, nobis molestias repellat pariatur hic consequuntur.
            Laboriosam sit nihil deleniti officiis! Natus reprehenderit mollitia
            error atque doloribus reiciendis laborum vitae earum exercitationem
            nihil nobis esse labore eligendi deserunt, tenetur fugiat? Expedita
            iure rerum voluptates neque distinctio, perspiciatis tempora
            provident repellendus accusamus aperiam odit, nisi reprehenderit,
            veritatis accusantium laudantium! Recusandae quis voluptas facilis
            alias aliquam vel atque porro numquam voluptatibus laudantium.
            Voluptate distinctio quibusdam temporibus optio et beatae, ipsum
            tempora neque, dolores commodi autem assumenda quisquam laborum qui
            magni explicabo blanditiis mollitia nihil reiciendis dolor earum!
            Doloremque veritatis accusantium necessitatibus aliquam sunt
            sapiente dolores asperiores harum, possimus, cumque vero quia
            obcaecati reiciendis voluptatem eum ad dignissimos ut non fuga.
            Laborum, ducimus ad. Autem iste, explicabo necessitatibus distinctio
            ipsa dolor deserunt repellat molestiae officiis optio earum
            blanditiis inventore commodi animi temporibus nemo minus tenetur
            quasi ex quaerat. Veritatis modi rerum hic qui odio! Magnam sint
            repellendus, sequi harum omnis modi voluptatibus perspiciatis illum
            tempore excepturi nostrum dolore, temporibus ea ipsum at facilis
            debitis mollitia iure deleniti quia? Expedita a similique
            exercitationem tempora blanditiis voluptatibus iste odio culpa modi
            eius deleniti mollitia, eligendi consequuntur numquam molestiae
            commodi, omnis, ipsam nulla? Autem impedit dignissimos minima cum
            blanditiis temporibus dolorem voluptatum ullam maiores sit, mollitia
            itaque numquam quae. Rem, velit. Exercitationem ad mollitia est sint
            quisquam aliquam praesentium obcaecati provident eaque similique.
            Repellat exercitationem culpa pariatur, ab provident commodi ratione
            voluptas voluptatibus eius doloribus natus ipsam et accusantium vero
            aspernatur consequatur reprehenderit atque ad nulla animi. Quam,
            tenetur enim, modi eaque soluta et obcaecati magni debitis cum
            blanditiis consequatur. Quaerat voluptatum beatae nulla, temporibus
            ullam deserunt mollitia. Facilis ducimus numquam animi voluptates
            ipsum libero, repudiandae officiis quaerat quibusdam deserunt illum
            quo minima magnam error aliquam amet tenetur! Optio quam labore
            ducimus voluptatum nobis. Dolores aperiam, excepturi ipsam vero
            sapiente consectetur, debitis repellendus eos cupiditate quas odit
            quibusdam eius officiis rerum voluptates. Cupiditate harum unde amet
            dolorum officiis nulla debitis accusamus sunt inventore. Possimus
            sapiente quas dicta dolore mollitia, facilis voluptatum consequatur
            reiciendis eveniet autem odio dolorum?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur a
            modi eum, quod quam commodi adipisci dolorum ducimus fugiat illo.
            Soluta doloribus, dicta minima voluptatum itaque quis ad ut eveniet
            quidem corrupti eos iusto similique facilis sunt? Doloribus enim
            quo, rem praesentium, dicta consequuntur incidunt recusandae
            perferendis possimus repudiandae eaque sint et voluptatum culpa est
            laboriosam labore sunt eligendi voluptatibus iste accusamus.
            Deserunt exercitationem magnam quis? Voluptatem beatae natus odio
            dignissimos consequuntur nam ratione autem, ea quasi enim eos minima
            sint nisi, ipsum fugiat cum nihil, ducimus deserunt porro! Amet ut
            impedit ratione cupiditate officiis harum ipsum error laudantium
            perferendis iusto delectus exercitationem quod eos illum,
            reprehenderit provident nesciunt earum at adipisci voluptas!
            Dolores, autem vel. Assumenda quaerat minima esse ad dolorum
            reiciendis unde eveniet dicta neque veniam excepturi inventore
            laudantium adipisci sed aperiam sapiente, hic tenetur culpa nihil
            perspiciatis? Dolorem nobis deserunt voluptates in impedit. Nulla
            sint obcaecati fuga sequi voluptate perspiciatis autem, quaerat ab
            reprehenderit quod quia ad commodi blanditiis odio. Incidunt
            officiis odit culpa ad blanditiis? Sint minus voluptate laborum
            adipisci eveniet itaque velit, veritatis optio quas asperiores fuga
            natus non mollitia reiciendis omnis sit a debitis cumque id
            exercitationem in perspiciatis animi quae. Reprehenderit
            exercitationem error esse consequatur ad, modi impedit ut illum
            nesciunt consequuntur quis fuga incidunt cumque labore placeat
            praesentium maxime, laborum unde nisi odit culpa suscipit ipsam
            inventore rem! Impedit quis saepe, est voluptate ipsam ad dolorum
            dicta voluptas quia libero adipisci, eaque magnam facere
            reprehenderit? Consectetur itaque numquam recusandae inventore.
            Distinctio, molestias! Beatae, adipisci similique dolorum
            accusantium sunt porro incidunt nihil temporibus quos quis dolore
            nulla tempora eum? Aspernatur quidem reiciendis est amet ullam vitae
            architecto temporibus, consectetur doloribus optio officia quos qui
            laudantium beatae tempora iste corporis veniam eligendi vero ab
            repellendus minima saepe? Assumenda doloremque ea suscipit ipsa, ab
            eius nihil, natus, distinctio vel nemo fugiat nulla porro maxime
            voluptas. Minima dolorum quidem delectus amet, incidunt, odio neque
            eos corporis totam error tempora numquam eveniet beatae sint, dolor
            soluta deleniti nostrum! Aliquid suscipit dolorum dicta deleniti
            eveniet corrupti nemo facere natus laudantium molestiae? Saepe minus
            architecto et, quis in consectetur! Iure dolorum possimus
            praesentium odio sint labore modi beatae numquam, aut, veniam illum
            ab repellendus tempora tempore! Sed ipsum fugit, ducimus voluptatum,
            sint quos dolorem voluptas deleniti est provident voluptatem quasi
            accusamus tempora vero quibusdam sit dicta dolores ratione nemo
            sapiente tempore maxime assumenda. Laudantium ipsa exercitationem
            magnam debitis cumque!
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerPagesNew;

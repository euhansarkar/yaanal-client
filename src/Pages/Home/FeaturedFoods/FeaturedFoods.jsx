import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const FeaturedFoods = () => {
  return (
    <Tabs>
      <div className="my-8">
        <TabList className="flex w-4/5 mx-auto gap-7">
          <Tab>
            <button className="btn btn-wide btn-primary">Wide</button>
          </Tab>
          <Tab>
            <button className="btn btn-wide btn-error">Wide</button>
          </Tab>
          <Tab>
            <button className="btn btn-wide btn-warning">Wide</button>
          </Tab>
          <Tab>
            <button className="btn btn-wide btn-secondary">Wide</button>
          </Tab>
        </TabList>

        <div className="flex mx-auto w-4/5">
          <TabPanel>
            <h2> this is first Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni in recudae autem possimus dolores maxime quos eum fuga quod voluptas earum neque eaque. Illo ex animi harum aspernatur error adipisci accusantium rerum alias laborum repellat fuga, autem perspiciatis, iusto quo suscipit labore tempore veniam libero.</h2>
          </TabPanel>
          <TabPanel>
            <h2> this is second Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quia inventore ex voluptatibus, praesentium maiores deserunt et ni a quam ipsa iste doloremque recusandae omnis accusantium pariatur cupiditate deleniti corrupti culpa cum voluptatum accusamus eos sapiente? Doloremque, acNihil quo modi quasi voluptatem, amet minus possimus blanditiis consequuntur illo, assumenda cumque ratione aspernatur? Explicabo aspernatur, sequi placeat eos qui odio excepturi quo nam consectetur natus nemo iure vitae vel sunt consequuntur tenetur nesciunt, dolorum numquam a quae repudiandae debitis enim optio eveniet! Quod aperiam quibusdam earum nostrum nisi mollitia sit, qui odit quisquam, optio odio reiciendis magnam nihil! Necessitatibus aut architecto provident, soluta nihil commodi cum? Consequatur, itaque vel!</h2>
          </TabPanel>
          <TabPanel>
            <h2> this is third Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio, commodi ipsam magnam praesentium doloribus ab perferendis obcaecati doloremque nam molestiae qui ipsum aliquam illum similique, aspernatur delectus facilis eos sed natus iure fuga. Fugit, corrupti nesciunt. Quo, tempore? Nostrum, minima eaque. Blanditiis totam eligendi pariatur libero uptatum corrupti, impedit iusto possimus illo ut asperiores nostrum nesciunt, obcaecati accusantium! Labore qui, omnis cum, voluptates suscipit quis sunt distinctio ea deserunt delectus harum est soluta saepe quia placeat tempora hic minima accusamus nobis! Distinctio quod sapiente aut est sequi dignissimos ducimus eius, officia quos quas optio totam itaque atque inventore deserunt unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi, tempora quasi corrupti provident commodi itaque numquam nostrum cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui! Sapiente, rerum tium dignissimos ullam.</h2>
          </TabPanel>
          <TabPanel>
            <h2> this is forth Loreceat tempora hic minima accusamus nobis! Distinctio quod sapiente aut est sequi dignissimos ducimus eius, officia quos quas optio totam itaque atque inventore deserunt unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi, tempora quasi corrupti provident commodi itaque numquam nostrum cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui! Sapiente, rerum qui consectetur eaque odio animi impedit? Autem explicabo accusantium incidunt officia magnam eaque! Nulla mollitia obcaecati error repellendus aliquam aspernatur voluptas accusantium. Nesciunt nihil minus fugit eveniet excepturi. Quidem, minus velit explicabo quisquam hic illo, placeat recusandae sed fugiat et commodi eveniet optio architecto, ullam ut sapiente iusto. Recusandae maiores magnam necessitatibus beatae deserunt sed vitae dicta repudiandae excepturi consequuntur, odio perspiciatis voluptates maxime eos ad architecto, eum enim quam accusantium iste impedit soluta ipsum. Quasi, voluptatibus et ut iusto dolore dicta possimus placeat cumque perferendis quae voluptas, dignissimos voluptatum perspiciatis saepe laudantium est esse. Deleniti exercitationem praesentium dignissimos ullam.</h2>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default FeaturedFoods;

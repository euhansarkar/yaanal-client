import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const FeaturedFoods = () => {
  const [activeColor, setActiveColor] = useState({
    activeDiv: null,
    allDivs: [
      { id: 1, name: `coffee` },
      { id: 2, name: `fast food` },
      { id: 3, name: `pizza` },
      { id: 4, name: `rice menu` },
    ],
  });

  const activeId = (index) => {
    setActiveColor({ ...activeColor, activeDiv: activeColor?.allDivs[index] });
  };

  const addClass = (index) => {
    if (activeColor?.allDivs[index] === activeColor?.activeDiv) {
      return `btn btn-wide btn-primary`;
    }
    return `btn btn-wide btn-base-100`;
  };

  return (
    <Tabs classID="my-20">
      <div className="my-20 w-11/12 mx-auto flex items-center">
        <TabList className="flex flex-col mx-auto gap-7">
          {activeColor?.allDivs?.map((div, index) => (
            <Tab key={index}>
              <button
                onClick={() => activeId(index)}
                className={addClass(index)}
              >
                {div?.name}
              </button>
            </Tab>
          ))}
        </TabList>

        <div className="divider lg:divider-horizontal text-secondary"></div>

        <div className="flex mx-auto w-4/5">
          <TabPanel>
            <h2>
              {" "}
              this is first this is forth Loreceat tempora hic minima accusamus nobis! Distinctio quod sapiente aut est sequi dignissimos ducimus eius, officia quos quas optio totam itaque atque inventore deserunt unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi, tempora quasi corrupti provident commodi itaque numquam nostrum cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui! Sapiente, rerum qui consectetur eaque odio animi impedit? Autem explicabo accusantium incidunt officia magnam eaque! Nulla mollitia obcaecati error repellendus aliquam aspernatur voluptas accusantium. Nesciunt nihil minus fugit eveniet excepturi. Quidem, minus velit explicabo quisquam hic illo, placeat recusandae sed fugiat et commodi eveniet optio architecto, ullam ut sapiente iusto. Recusandae maiores magnam necessitatibus beatae deserunt sed vitae dicta repudiandae excepturi consequuntur, odio perspiciatis voluptates maxime eos ad architecto, eum enim quam accusantium iste impedit soluta ipsum. Quasi, voluptatibus et ut iusto dolore dicta possimus placeat cumque perferendis quae voluptas, dignissimos voluptatum perspiciatis saepe laudantium est esse. Deleniti exercitationem praesentium dignissimos ullam.
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              {" "}
              this is second this is forth Loreceat tempora hic minima accusamus nobis! Distinctio quod sapiente aut est sequi dignissimos ducimus eius, officia quos quas optio totam itaque atque inventore deserunt unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi, tempora quasi corrupti provident commodi itaque numquam nostrum cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui! Sapiente, rerum qui consectetur eaque odio animi impedit? Autem explicabo accusantium incidunt officia magnam eaque! Nulla mollitia obcaecati error repellendus aliquam aspernatur voluptas accusantium. Nesciunt nihil minus fugit eveniet excepturi. Quidem, minus velit explicabo quisquam hic illo, placeat recusandae sed fugiat et commodi eveniet optio architecto, ullam ut sapiente iusto. Recusandae maiores magnam necessitatibus beatae deserunt sed vitae dicta repudiandae excepturi consequuntur, odio perspiciatis voluptates maxime eos ad architecto, eum enim quam accusantium iste impedit soluta ipsum. Quasi, voluptatibus et ut iusto dolore dicta possimus placeat cumque perferendis quae voluptas, dignissimos voluptatum perspiciatis saepe laudantium est esse. Deleniti exercitationem praesentium dignissimos ullam.
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              {" "}
              this is third this is forth Loreceat tempora hic minima accusamus nobis! Distinctio quod sapiente aut est sequi dignissimos ducimus eius, officia quos quas optio totam itaque atque inventore deserunt unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi, tempora quasi corrupti provident commodi itaque numquam nostrum cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui! Sapiente, rerum qui consectetur eaque odio animi impedit? Autem explicabo accusantium incidunt officia magnam eaque! Nulla mollitia obcaecati error repellendus aliquam aspernatur voluptas accusantium. Nesciunt nihil minus fugit eveniet excepturi. Quidem, minus velit explicabo quisquam hic illo, placeat recusandae sed fugiat et commodi eveniet optio architecto, ullam ut sapiente iusto. Recusandae maiores magnam necessitatibus beatae deserunt sed vitae dicta repudiandae excepturi consequuntur, odio perspiciatis voluptates maxime eos ad architecto, eum enim quam accusantium iste impedit soluta ipsum. Quasi, voluptatibus et ut iusto dolore dicta possimus placeat cumque perferendis quae voluptas, dignissimos voluptatum perspiciatis saepe laudantium est esse. Deleniti exercitationem praesentium dignissimos ullam.
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              {" "}
              this is forth Loreceat tempora hic minima accusamus nobis!
              Distinctio quod sapiente aut est sequi dignissimos ducimus eius,
              officia quos quas optio totam itaque atque inventore deserunt
              unde. Sequi delectus culpa iure ut laborum voluptate soluta beatae
              quibusdam, eaque explicabo porro obcaecati! Ipsum nihil eum animi,
              tempora quasi corrupti provident commodi itaque numquam nostrum
              cupiditate sit debitis, vitae ad necessitatibus quae nisi culpa
              quis enim! Nobis, nisi. Molestiae, exercitationem! Doloribus, qui!
              Sapiente, rerum qui consectetur eaque odio animi impedit? Autem
              explicabo accusantium incidunt officia magnam eaque! Nulla
              mollitia obcaecati error repellendus aliquam aspernatur voluptas
              accusantium. Nesciunt nihil minus fugit eveniet excepturi. Quidem,
              minus velit explicabo quisquam hic illo, placeat recusandae sed
              fugiat et commodi eveniet optio architecto, ullam ut sapiente
              iusto. Recusandae maiores magnam necessitatibus beatae deserunt
              sed vitae dicta repudiandae excepturi consequuntur, odio
              perspiciatis voluptates maxime eos ad architecto, eum enim quam
              accusantium iste impedit soluta ipsum. Quasi, voluptatibus et ut
              iusto dolore dicta possimus placeat cumque perferendis quae
              voluptas, dignissimos voluptatum perspiciatis saepe laudantium est
              esse. Deleniti exercitationem praesentium dignissimos ullam.
            </h2>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default FeaturedFoods;

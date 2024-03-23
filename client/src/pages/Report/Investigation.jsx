import React from 'react'
import Menu from './Menu'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
export default function Investigation() {
    return (
        <div>
            <div className="w-screen flex flex-row">

                <div className="cc w-1/2 my-5 ml-5 mr-2">
                    <Menu />
                </div>


                <div className="w-1/2">
                    <div className="present my-5 ml-2 mr-5 bg-gray-100 border-2 border-primary rounded-3xl  p-4 shadow-md">
                        <h2 className="text-xl font-semibold mb-2" > Present Illness:</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore ducimus atque quia illum enim vero unde optio nisi, ipsum, vel ipsa voluptatum vitae velit laudantium autem consectetur ea fugit?
                            Accusamus corporis obcaecati corrupti aperiam molestias cum numquam a, quasi sit saepe dicta nisi nulla culpa nostrum atque consequatur ipsam doloremque alias dolorum dolor quisquam molestiae enim. Eveniet, necessitatibus debitis?
                            Deleniti, id autem repellat nihil eius assumenda! Excepturi expedita, accusantium doloremque fuga minus id odio ullam vitae vel consectetur odit accusamus saepe recusandae qui dolores a soluta doloribus. Dolores, nobis.
                            Maxime ratione tenetur tempora quasi numquam aspernatur reprehenderit maiores, quam deleniti distinctio minus quibusdam voluptates sequi? Sequi dolorem officia, ratione vitae quo delectus doloremque praesentium quasi quis eius in nostrum.
                            Sapiente culpa ullam natus, impedit quia veritatis voluptate nobis. Nostrum vitae libero molestias culpa qui dolores, cum dolorum provident, accusantium omnis enim placeat possimus. Nesciunt ipsum recusandae earum voluptas iusto.</p>
                    </div>
                </div>
            </div>
            <Footer2/>
            <Footer1/>
        </div>
    )
}

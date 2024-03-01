import React from 'react';


function Menu() {
    console.log("test")
    return (
        <section id="menu">
            <h2>Menu</h2>
            <div className='menu-item'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fakcdn.detik.net.id%2Fvisual%2F2020%2F03%2F11%2Fb363f9a4-9c5d-450e-8de1-b98398654898_169.jpeg%3Fw%3D700%26q%3D90&f=1&nofb=1&ipt=45f5bb855162b4e34856e677e3cfdd399b2468598e332cc43ff83dea032cf3e5&ipo=images'></img>
                <h3>Premium Meals</h3>
                <ul>
                    <li>Original Recipe Chicken</li>
                    <li>Fried Chicken</li>
                    <li>Extra Crispy Chicken</li>
                    <li>Burger Big Chicken</li>
                </ul>
            </div>
            <div className='menu-item'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fakcdn.detik.net.id%2Fvisual%2F2020%2F03%2F11%2Fb363f9a4-9c5d-450e-8de1-b98398654898_169.jpeg%3Fw%3D700%26q%3D90&f=1&nofb=1&ipt=45f5bb855162b4e34856e677e3cfdd399b2468598e332cc43ff83dea032cf3e5&ipo=images'></img>
                <h3>Classic Meals</h3>
                <ul>
                    <li>3-Piece Chicken Meal</li>
                    <li>Big Box Meal</li>
                    <li>Family Meal</li>
                </ul>
            </div>
            <div className='menu-item'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fakcdn.detik.net.id%2Fvisual%2F2020%2F03%2F11%2Fb363f9a4-9c5d-450e-8de1-b98398654898_169.jpeg%3Fw%3D700%26q%3D90&f=1&nofb=1&ipt=45f5bb855162b4e34856e677e3cfdd399b2468598e332cc43ff83dea032cf3e5&ipo=images'></img>
                <h3>Sides & Drinks</h3>
                <ul>
                    <li>Cole Shaw</li>
                    <li>Mashed Potatoes & Gravy</li>
                    <li>Soda</li>
                    <li>Iced Tea</li>
                    <li>Lemon Tea</li>
                </ul>
            </div>
        </section>
    )
}

export default Menu;
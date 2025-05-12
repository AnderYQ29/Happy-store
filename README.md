# PROYECTO FINAL - IDAT

## 💼 Happy Store - E-commerce React 💼

## 📃 Índice 📃

* [📋 Descripción del Proyecto](#-descripción-del-proyecto)
* [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
* [📸 Capturas del Proyecto](#-capturas-del-proyecto)
* [🧠 Estado Global con Zustand](#-estado-global-con-zustand)
* [💼 Funcionalidades](#-funcionalidades)
* [🚀 Deploy](#-deploy)
* [🙌 Autor](#-autor)

---

## 📋 Descripción del Proyecto 📋

**HappyStore** es una tienda online ficticia desarrollada con **React** con amplia variedad de productos para los clientes, enfocada en ofrecer una experiencia de usuario rápida, intuitiva y atractiva realizada con Bootstrap y SASS. Incluye navegación por productos, vista detallada, y un carrito de compras funcional implementado con **Zustand** como sistema de manejo de estado global.

---

## 🛠️ Tecnologías Utilizadas 🛠️

| Tecnología               | Descripción                                            |
| ------------------------ | ------------------------------------------------------ |
| ⚛️ React ⚛️                | Librería principal para la construcción de la interfaz |
| 🐻 Zustand 🐻              | Manejo de estado global para el carrito de compras     |
| 🎨 Bootstrap 🎨            | Estilos y componentes responsivos                      |
| 🌐 FakeStore API 🌐         | API para productos ficticios                           |
| 📦 Vite 📦                 | Entorno de desarrollo rápido                           |
| 🎨 SASS 🎨                 | preprocesador de CSS que permite a escribir hojas de estilo de manera más eficiente y organizada                           |

---

## 📸 Capturas del Proyecto

> 📷 Imagenes del proyecto

* Página Home
![Home](https://i.postimg.cc/Y2hXF2Sz/Fire-Shot-Capture-010-Happy-Store-happy-store-tawny-vercel-app.png)
* Página principal con productos.
![Productos](https://i.postimg.cc/vHn3PPf1/Fire-Shot-Capture-011-Happy-Store-happy-store-tawny-vercel-app.png)
* Detalles del producto.
![DetailProducts](https://i.postimg.cc/jjxcSt9N/Fire-Shot-Capture-012-Happy-Store-happy-store-tawny-vercel-app.png)
* Carrito de producto / Compra de producto
![Carro](https://i.postimg.cc/tTh4vGqS/Fire-Shot-Capture-013-Happy-Store-happy-store-tawny-vercel-app.png)
* Checkout de la pagina.
![Checkout](https://i.postimg.cc/5ygN15F8/Fire-Shot-Capture-014-Happy-Store-happy-store-tawny-vercel-app.png)
* Pagina Nosotros.
![Nosotros](https://i.postimg.cc/8z9k1zsX/Fire-Shot-Capture-015-Happy-Store-happy-store-tawny-vercel-app.png)
* Pagina de Contacto.
![Contactanos](https://i.postimg.cc/NFdYZgW4/Fire-Shot-Capture-016-Happy-Store-happy-store-tawny-vercel-app.png)
---


## 🧠 Estado Global con Zustand

HappyStore usa Zustand para controlar el **carrito de compras y la venta**, la cual nos permite:

* Añadir productos.
* Eliminar productos.
* Calcular el total de la compra.
* Persistencia sencilla en memoria.
* Venta de los productos

Ejemplo de mi estado global:

```js
// src/store/cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (product) =>
        set((state) => {
            const exists = state.cartItems.find((item) => item.id === product.id);
            if (exists) {
                return {
                    cartItems: state.cartItems.map((item) =>
                    item.id === product.id
                ? {...item, quantity: item.quantity + 1}
            : item
        ),
        };
            } else {
                return {
                    cartItems: [...state.cartItems, {...product, quantity: 1}],
                };
            }
        }),
        removeFromCart: (id) =>
            set((state) => ({
                cartItems: state.cartItems.filter((item) => item.id !==id),
            })),
            clearCart: () => set({ cartItems: [] }),
}));

export default useCartStore;
```

---

## 💼 Funcionalidades

✅ Visualización de productos que nos entrega la FakeStore API

✅ Agregar y quitar del carrito

✅ Vista detallada de producto

✅ Total dinámico del carrito

✅ Responsive (móvil, tablet, desktop)

✅ Navegación entre páginas con React Router

---

## 🚀 Deploy

Para el deploy se utilizo vercel, por la facilidad que nos da para subir nuestro proyecto y tenerlo en línea.

Puedes ver el proyecto en línea aquí:
🔗 [https://happy-store-tawny.vercel.app](https://happy-store-tawny.vercel.app)

---

## 🙌 Autor

> ✍️ Desarrollado por Jhon Anderson Yancapallo Quilluya

> 📧 Email: [yancapallojhon@gmail.com](yancapallojhon@gmail.com)

> 🌐 GitHub: [https://github.com/AnderYQ29/happy-store](https://github.com/AnderYQ29/happy-store)
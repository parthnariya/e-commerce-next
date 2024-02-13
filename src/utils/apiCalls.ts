export async function addItem(productId: string) {
  try {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data;
  } catch (e) {}
}

export async function getProduct(productId: string) {
  try {
    const res = await fetch(`/api/product?productId=${productId}`, {
      method: "GET",
    });

    if (!res.ok) {
      return;
    }
    const product = await res.json();
    return product;
  } catch (e) {}
}
export async function removeItem(productId: string) {
  try {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data;
  } catch (e) {}
}
export async function removeCart() {
  try {
    const res = await fetch("/api/cart/deleteCart", {
      method: "DELETE",
    });
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    return data;
  } catch (e) {}
}

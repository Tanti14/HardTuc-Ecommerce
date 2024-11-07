import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "@/components/admin-view/AdminLayout";
import { AuthRegister } from "@/pages/auth/register";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { PageLayout } from "@/components/Layout/PageLayout";
import { AuthLogin } from "@/pages/auth/login";
import { AdminDashboard } from "@/pages/admin-view/dashboard";
import { AdminProducts } from "@/pages/admin-view/products";
import { AdminOrders } from "@/pages/admin-view/orders";
import { AdminFeatures } from "@/pages/admin-view/features";
import { ShoppingLayout } from "@/components/shopping-view/ShoppingLayout";
import { NotFound } from "@/pages/not-found/NotFound";
import { ShoppingHome } from "@/pages/shopping-view/Home";
import { ShoppingListing } from "@/pages/shopping-view/Listing";
import { ShoppingCheckout } from "@/pages/shopping-view/Checkout";
import { ShoppingAccount } from "@/pages/shopping-view/Account";
import { HomePage } from "@/pages/Home/Home";
import { CheckAuth } from "@/components/common/CheckAuth";
import { NotAuthuser } from "@/pages/not-auth-user/NotAuthuser";

export const PageRoutes = () => {
  const isAuth = false;
  const user = null;

  return (
    <BrowserRouter>
      <PageLayout>
        {/* Este componente seria mi div contenedor de toda la aplicacion */}
        <Routes>
          {/* Ruta de inicio */}
          {/* <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
          </Route> */}

          {/* Rutas de autenticacion */}
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuth} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          {/* Rutas de administrador */}
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuth} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>

          {/* Rutas de compras */}
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuth} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<ShoppingAccount />} />
          </Route>

          {/* Ruta no encontrada / Usuario no autenticado */}
          <Route path="notauthuser" element={<NotAuthuser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

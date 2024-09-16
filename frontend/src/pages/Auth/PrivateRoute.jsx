import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;


// explanation
// This code defines a PrivateRoute component that protects certain routes in a React application.
// It ensures that only authenticated users (i.e., users who are logged in) can access those routes.
// If a user is not authenticated, they will be redirected to the login page.

// useSelector((state) => state.auth):

// This line accesses the auth state from the Redux store 
// and gets the userInfo property.
// userInfo likely contains the logged-in user's information (if authenticated).
// Condition:

// return userInfo ? <Outlet /> : <Navigate to="/login" replace />;:
// If userInfo exists (i.e., the user is authenticated), the component 
// renders the <Outlet />.
// The <Outlet /> component acts as a placeholder for nested routes 
// (i.e., child routes) to render.
// If userInfo is null or undefined (i.e., the user is not authenticated),
// the user is redirected to the /login page using the <Navigate /> component.
// The replace attribute ensures that the redirection does not create a new entry
//  in the browser's history, so users can't go back to the protected route by pressing the 
// back button.


// what exactly is outlet is using real world example
// Scenario:
// Gated Community (PrivateRoute): This is the entrance to the gated community,
// and only people who have permission (residents, guests) can enter. If you're not allowed,
// you'll be redirected to a security office (login page) to get approval.
// Houses (Nested Routes): Inside the community, there are multiple houses you can visit 
// once you're allowed inside.
// How the components relate:
// PrivateRoute (Gated Community Entrance):

// At the gate, the security guard checks if you are an authenticated resident or guest 
// (similar to checking userInfo).
// If you are allowed, the gate opens, and you're allowed inside (equivalent to rendering <Outlet />).
// <Outlet /> (Houses Inside):

// Once you're inside the community, the <Outlet /> is like a path that leads you to different 
// houses (the nested or child routes).
// If you visit House A, B, or C (specific routes), you can go straight to them.
// If you're not authenticated at the gate, you'll never even reach the point where you can visit 
// these houses; instead, you're sent to the security office (the login page).
// In code terms:
// PrivateRoute is the gatekeeper.
// <Outlet /> allows access to the inner routes (the houses, or the different parts of your website)
//  once you've passed the authentication check.
// So, the <Outlet /> acts as the placeholder for rendering the different child routes after you've 
// cleared the main "gated" check!







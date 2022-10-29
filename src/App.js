/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LocalizationProvider } from "@mui/lab"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import "./App.css"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoutes />}>
            <Route path='/booking-details' element={<BookingDeatils />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/passenger-details' element={<PassengerDetails />} />
            <Route path='/payment' element={<PaymentPage />} />
          </Route> */}
        {/* <Route element={<AdminOnlyRoutes />}>
            <Route path='/admin' element={<AdminDashBoard />} />
          </Route> */}
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/search-result' element={<SearchResultPage />} /> */}

        {/* <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/unauthorized' element={<PermissionDenied />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

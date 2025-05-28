import { Routes, Route } from "react-router-dom";
import Jogo from "../pages/jogo/Jogo";
import Header from "../components/Header/Header";
import './AppRoute.scss'
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
import Biblioteca from "../pages/biblioteca/Biblioteca";
import Disciplinas from "../pages/disciplinas/Disciplinas";
import Index from "../pages/index/Index";
import Home from "../pages/home/Home";
import Boletim from "../pages/boletim/Boletim";
import Conta from "../pages/conta/Conta";
//import Conta from "../pages/conta/Conta";
import '../styles/main.scss';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header titulo="Index" login={false} />
                    <div className="content">
                        <Nav logado={false} />
                        <Index />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/home" element={
                <>
                    <Header titulo="Home" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Home />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/jogo" element={
                <>
                    <Header titulo="Jogo" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Jogo />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/biblioteca" element={
                <>
                    <Header titulo="Biblioteca" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Biblioteca />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/disciplinas" element={
                <>
                    <Header titulo="Disciplinas" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Disciplinas />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/boletim" element={
                <>
                    <Header titulo="Boletim" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Boletim />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />

            <Route path="/conta" element={
                <>
                    <Header titulo="Conta" login={true} />
                    <div className="content">
                        <Nav logado={true} />
                        <Conta />
                        <Section />
                    </div>
                    <Footer />
                </>
            } />
        </Routes>
    )
}
import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePageNotes from "./pages/HomePageNotes";
import AddPageNotes from "./pages/AddPageNotes";
import NoteDetailPageWrapper from "./pages/DetailPageNotes";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPages";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import HeaderApp from "./HeaderApp";
import ArchivePageNotes from "./pages/ArchivePagesNotes";
import { ThemeProvider } from "../contexts/ThemeContext";


class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
            initializing: true,
            themeContext: {
                theme: localStorage.getItem('theme') || 'light',
                toggleTheme: () => {
                  this.setState((prevState) => {
                    const newTheme = prevState.themeContext.theme === 'light' ? 'dark' : 'light';
                    localStorage.setItem('theme', newTheme);
                    return {
                      themeContext: {
                        ...prevState.themeContext,
                        theme: newTheme
                      }
                    }
                  })
                }
              }
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    async componentDidMount() {
        document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
                initializing: false
            };
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.themeContext.theme !== this.state.themeContext.theme) {
          document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
        }
      }
    

    async onLoginSuccess({ accessToken }){
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    onLogout() {
        this.setState(() => {
            return {
                authedUser: null
            }
        });

        putAccessToken('');
    }

    render() {
        if (this.state.initializing) {
            return null;
        }

        if (this.state.authedUser === null) {
        return  (
         <ThemeProvider value={this.state.themeContext}> 
            <div>
                
                <Routes>   
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess}/>} />
                <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </ThemeProvider>
            )
        }
        return (
            <ThemeProvider value={this.state.themeContext}>
            <div>
                <HeaderApp logout={this.onLogout} name={this.state.authedUser.name} />
                <Routes>   
                <Route path="/" element={<HomePageNotes />} />
                <Route path="/add" element={<AddPageNotes />} />
                <Route path="/archive" element={<ArchivePageNotes />} />
                <Route path="/notes/:id" element={<NoteDetailPageWrapper />} />
                </Routes>
            </div>
            </ThemeProvider>
            )
    }
}

export default ContactApp;
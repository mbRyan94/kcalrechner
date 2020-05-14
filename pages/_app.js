import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../components/theme";
import App from "next/app";
import {
  ADD_AGE,
  ADD_ACTIVITY_LEVEL,
  ADD_WEIGHT,
  ADD_HEIGHT,
  ADD_GENDER,
  ADD_ACTIVE_KCAL,
  ADD_BASE_KCAL,
} from "../redux/actions-types";

const initialState = {
  age: null,
  weight: null,
  gender: "female",
  height: null,
  activityLevel: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AGE:
      return { ...state, age: action.payload };
    case ADD_HEIGHT:
      return { ...state, height: action.payload };
    case ADD_WEIGHT:
      return { ...state, weight: action.payload };
    case ADD_ACTIVITY_LEVEL:
      return { ...state, activityLevel: action.payload };
    case ADD_GENDER:
      return { ...state, gender: action.payload };
    case ADD_ACTIVE_KCAL:
      return { ...state, activeKcal: action.payload };
    case ADD_BASE_KCAL:
      return { ...state, baseKcal: action.payload };
    default:
      return state;
  }
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, ctx }) {
    // We can dispatch from here too
    ctx.store.dispatch({ type: "FOO", payload: "foo" });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
  render() {
    // React.useEffect(() => {
    //   // Remove the server-side injected CSS.
    //   const jssStyles = document.querySelector("#jss-server-side");
    //   if (jssStyles) {
    //     jssStyles.parentElement.removeChild(jssStyles);
    //   }
    // }, []);
    const { Component, pageProps, store } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Kcal-Rechner</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withRedux(makeStore)(MyApp);

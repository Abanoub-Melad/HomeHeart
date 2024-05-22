
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey, red } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

export const getDesignTokens = (mode, direction) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                bg: {
                    main: "#f6f6f6",
                },
                myColor: {
                    main: "#F6f9fc",
                    secondary: "#D23F57",
                },
                text: {
                    primary: "#2B3445",
                },
                neutral: {
                    main: "#64748B",
                },
                favColor: {
                    main: grey[300],
                },
            }
            : {
                textTypography: { textColor: "yellow" },
                bg: {
                    main: "#12021",
                },
                myColor: {
                    main: "#252b32",
                    secondary: "#D23F57",
                },
                neutral: {
                    main: "#64748B",
                },
                favColor: {
                    main: grey[800],
                },
                text: {
                    primary: "#fff",
                },
            }),
    },
    direction
});

export const ColorModeContext = createContext({
    toggleColorMode: null,
    changeDirection: null, // Add changeDirection to context
});

export const useMode = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
    );
    const { i18n } = useTranslation()
    const [direction, setDirection] = useState(
        i18n.language === 'en' ? 'ltr': "rtl"
        // console.log(direction, "mmmmmmm")
    );

    const dir =  i18n.language === 'en' ? 'ltr': "rtl"

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => {
                    localStorage.setItem("mode", prev === "light" ? "dark" : "light");
                    return prev === "light" ? "dark" : "light";
                }),
            changeDirection: () =>
                setDirection((prev) => {
                    const newDirection = prev === "ltr" ? "rtl" : "ltr";
                    localStorage.setItem("direction", newDirection);
                    return newDirection;
                }),
        }),
        []
    );
    // console.log('themetheme direction', dir)
    // console.log('themetheme i18n', i18n.language)

    const theme = useMemo(() => createTheme(getDesignTokens(mode, dir)), [
        mode,
        i18n.language,
    ]);
    return [theme, colorMode];
};

import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo =
        "https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png";
    return (
        <Container>
            <Toolbar
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                }}
            >
                <img src={logo} alt="logo" style={{ width: 28 }} />

                <Box component={"div"}>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                        }}
                    >
                        Codepen
                    </Typography>
                    <Typography variant="p" component="div">
                        By - Rohit
                    </Typography>
                </Box>
            </Toolbar>
        </Container>
    );
};

export default Header;

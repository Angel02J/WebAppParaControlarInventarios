import styled from "styled-components";

const HomeTemplate = () => {
    return (
        <>
            <Container>
                <h1>Home tamplate</h1>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.bgtotal};
    color: ${({ theme }) => theme.text};
    width: 100%;
`;

export default HomeTemplate

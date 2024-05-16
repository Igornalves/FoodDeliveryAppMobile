import styled from 'styled-components/native';
import theme from '../../../global/style/theme';

export const Conteiner = styled.View`
    flex: 1;
    width: 370px;
    align-items: center;
    height: 900px;
    justify-content: flex-end;
`;

// export const ConteinerText = styled.View`

// `;

export const TituleText = styled.Text`
    font-family: ${theme.fonts.Subheading20};
    font-size: 25px;
    margin-bottom: 16px;
    color: ${theme.colors.White};
`;

export const SubText = styled.Text`
    font-family: ${theme.fonts.Body};
    font-size: 15px;
    color: ${theme.colors.White};
`;

export const ImageWelcome = styled.Image`
    width: 398px;
    height: 900px;
`;

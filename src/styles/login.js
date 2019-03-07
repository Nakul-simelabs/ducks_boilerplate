import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
export const styles = StyleSheet.create({
    loginButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: COLORS.green,
        borderRadius: 10
    },
    loginButtonText: {
        color: COLORS.white
    }
});

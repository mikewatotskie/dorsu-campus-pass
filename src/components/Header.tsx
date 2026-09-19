import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.university}>
        DAVAO ORIENTAL STATE UNIVERSITY
      </Text>

      <Text style={styles.faculty}>
        FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
      </Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          OFFICIAL STUDENT DIGITAL PASS · AY 2026–2027
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.tealDark,
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  university: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 18,
    letterSpacing: 0.3,
  },

  faculty: {
    color: '#CDE8EE',
    fontSize: 9,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 14,
    marginTop: 3,
  },

  badge: {
    alignSelf: 'center',
    maxWidth: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 14,
  },

  badgeText: {
    color: '#CDE8EE',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 12,
  },
});
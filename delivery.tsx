import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const deliveryFeatures = [
  {
    id: 1,
    title: 'Express Delivery',
    description: 'Get your medicines delivered within 2 hours',
    icon: 'flash-outline',
    highlight: true,
  },
  {
    id: 2,
    title: 'Night Delivery',
    description: 'Emergency medicine delivery between 10 PM - 8 AM',
    icon: 'moon-outline',
  },
  {
    id: 3,
    title: 'Schedule Delivery',
    description: 'Plan your medicine delivery in advance',
    icon: 'calendar-outline',
  },
];

const deliverySteps = [
  'Place your order through the app',
  'Our pharmacist verifies your prescription',
  'Medicine is packed with care',
  'Delivered to your doorstep',
];

export default function DeliveryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2193b0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>24/7 Delivery</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          We ensure your medicines reach you whenever you need them, day or night.
        </Text>

        <View style={styles.featuresSection}>
          {deliveryFeatures.map((feature) => (
            <View 
              key={feature.id} 
              style={[styles.featureCard, feature.highlight && styles.highlightedCard]}
            >
              <View style={[styles.iconContainer, feature.highlight && styles.highlightedIcon]}>
                <Ionicons 
                  name={feature.icon} 
                  size={24} 
                  color={feature.highlight ? '#FFF' : '#2193b0'} 
                />
              </View>
              <Text style={[styles.featureTitle, feature.highlight && styles.highlightedText]}>
                {feature.title}
              </Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.stepsSection}>
          <Text style={styles.sectionTitle}>How it Works</Text>
          {deliverySteps.map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2D3436',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#636E72',
    marginBottom: 25,
    lineHeight: 24,
  },
  featuresSection: {
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  highlightedCard: {
    backgroundColor: '#2193b0',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  highlightedIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 4,
  },
  highlightedText: {
    color: '#FFF',
  },
  featureDescription: {
    fontSize: 14,
    color: '#636E72',
  },
  stepsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 20,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2193b0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  stepNumberText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#2D3436',
  },
  orderButton: {
    backgroundColor: '#2193b0',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
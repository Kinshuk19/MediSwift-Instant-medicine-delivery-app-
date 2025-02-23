import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const tests = [
  {
    id: 1,
    name: 'Complete Blood Count',
    description: 'Includes RBC, WBC, platelets count',
    price: 599,
    time: '24 hours',
  },
  {
    id: 2,
    name: 'Diabetes Screening',
    description: 'Fasting blood sugar, HbA1c',
    price: 799,
    time: '12 hours',
  },
  {
    id: 3,
    name: 'Thyroid Profile',
    description: 'T3, T4, TSH levels',
    price: 1299,
    time: '24 hours',
  },
  {
    id: 4,
    name: 'Lipid Profile',
    description: 'Cholesterol, triglycerides',
    price: 899,
    time: '12 hours',
  },
];

export default function LabTestsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2193b0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lab Tests</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Book diagnostic tests from the comfort of your home. Our certified technicians will collect your samples.
        </Text>

        {tests.map((test) => (
          <View key={test.id} style={styles.testCard}>
            <View style={styles.testInfo}>
              <Text style={styles.testName}>{test.name}</Text>
              <Text style={styles.testDescription}>{test.description}</Text>
              <View style={styles.testDetails}>
                <View style={styles.detail}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.detailText}>Results in {test.time}</Text>
                </View>
                <Text style={styles.testPrice}>₹{test.price}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    marginBottom: 20,
    lineHeight: 24,
  },
  testCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  testInfo: {
    flex: 1,
  },
  testName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
  },
  testDescription: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 5,
  },
  testDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 14,
  },
  testPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2193b0',
  },
  bookButton: {
    backgroundColor: '#2193b0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
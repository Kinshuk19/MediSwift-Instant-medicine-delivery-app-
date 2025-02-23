import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialization: 'General Physician',
    experience: '8 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    available: true,
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    specialization: 'Cardiologist',
    experience: '12 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    available: true,
  },
  {
    id: 3,
    name: 'Dr. Meera Patel',
    specialization: 'Pediatrician',
    experience: '10 years',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    available: false,
  },
  {
    id: 4,
    name: 'Dr. Arun Verma',
    specialization: 'Neurologist',
    experience: '15 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    available: true,
  },
  {
    id: 5,
    name: 'Dr. Sanya Khan',
    specialization: 'Dermatologist',
    experience: '9 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80',
    available: true,
  },
  {
    id: 6,
    name: 'Dr. Vikram Singh',
    specialization: 'Orthopedic',
    experience: '14 years',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    available: true,
  },
  {
    id: 7,
    name: 'Dr. Anita Desai',
    specialization: 'Gynecologist',
    experience: '11 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    available: true,
  },
  {
    id: 8,
    name: 'Dr. Rahul Mehta',
    specialization: 'Dentist',
    experience: '7 years',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    available: true,
  },
  {
    id: 9,
    name: 'Dr. Neha Gupta',
    specialization: 'Psychiatrist',
    experience: '13 years',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    available: false,
  },
  {
    id: 10,
    name: 'Dr. Suresh Reddy',
    specialization: 'ENT Specialist',
    experience: '16 years',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    available: true,
  },
];

export default function DoctorScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2193b0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Online Consultation</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Available Doctors</Text>
        
        {doctors.map((doctor) => (
          <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialization}>{doctor.specialization}</Text>
              <View style={styles.doctorStats}>
                <View style={styles.stat}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.statText}>{doctor.rating}</Text>
                </View>
                <View style={styles.stat}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.statText}>{doctor.experience}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity 
              style={[styles.consultButton, !doctor.available && styles.consultButtonDisabled]}
              disabled={!doctor.available}
            >
              <Text style={styles.consultButtonText}>
                {doctor.available ? 'Consult Now' : 'Unavailable'}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 20,
  },
  doctorCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
  },
  doctorSpecialization: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 2,
  },
  doctorStats: {
    flexDirection: 'row',
    marginTop: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  consultButton: {
    backgroundColor: '#2193b0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  consultButtonDisabled: {
    backgroundColor: '#CCC',
  },
  consultButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const categoryMedicines = {
  prescription: [
    {
      name: 'Amoxicillin',
      description: 'Antibiotic Medicine',
      price: '299',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    },
    {
      name: 'Omeprazole',
      description: 'Acid Reflux Medicine',
      price: '199',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
    },
  ],
  vitamins: [
    {
      name: 'Vitamin D3',
      description: 'Bone Health Support',
      price: '399',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
    },
    {
      name: 'B-Complex',
      description: 'Energy Booster',
      price: '299',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    },
  ],
  healthcare: [
    {
      name: 'Blood Pressure Monitor',
      description: 'Digital BP Monitor',
      price: '1999',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80',
    },
    {
      name: 'Glucometer',
      description: 'Blood Sugar Monitor',
      price: '1499',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    },
  ],
  'first-aid': [
    {
      name: 'First Aid Kit',
      description: 'Complete Emergency Kit',
      price: '999',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80',
    },
    {
      name: 'Bandages Set',
      description: 'Sterile Bandages',
      price: '199',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    },
    {
      name: 'Antiseptic Solution',
      description: 'Wound Cleaning',
      price: '149',
      image: 'https://images.unsplash.com/photo-1583912267550-82cef33c7412?w=800&q=80',
    },
    {
      name: 'Medical Scissors',
      description: 'Surgical Grade',
      price: '299',
      image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80',
    }
  ],
  'baby-care': [
    {
      name: 'Baby Lotion',
      description: 'Gentle Baby Care',
      price: '299',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    },
    {
      name: 'Diaper Pack',
      description: 'Premium Diapers',
      price: '599',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    },
    {
      name: 'Baby Powder',
      description: 'Talc-Free Formula',
      price: '199',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    },
    {
      name: 'Baby Wipes',
      description: 'Alcohol-Free',
      price: '149',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    }
  ]
};

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const medicines = categoryMedicines[category.toLowerCase()] || [];

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2193b0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category}</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.medicineGrid}>
          {medicines.map((medicine, index) => (
            <TouchableOpacity
              key={index}
              style={styles.medicineCard}
              onPress={() => router.push(`/medicines/${medicine.name.toLowerCase().replace(/\s+/g, '-')}`)}
            >
              <Image source={{ uri: medicine.image }} style={styles.medicineImage} />
              <View style={styles.medicineInfo}>
                <Text style={styles.medicineName}>{medicine.name}</Text>
                <Text style={styles.medicineDescription}>{medicine.description}</Text>
                <View style={styles.medicineBottom}>
                  <Text style={styles.medicinePrice}>₹{medicine.price}</Text>
                  <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => router.push('/cart')}
                  >
                    <Ionicons name="add" size={20} color="#FFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    textTransform: 'capitalize',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  medicineGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  medicineCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  medicineImage: {
    width: '100%',
    height: 150,
  },
  medicineInfo: {
    padding: 12,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3436',
  },
  medicineDescription: {
    fontSize: 12,
    color: '#636E72',
    marginTop: 4,
  },
  medicineBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  medicinePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2193b0',
  },
  addButton: {
    backgroundColor: '#2193b0',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
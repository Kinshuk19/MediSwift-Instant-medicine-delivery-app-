import { StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, TextInput, Alert } from 'react-native';
import { View, Text } from '../../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [location, setLocation] = useState('Mumbai, India');

  const handleLocationPress = () => {
    Alert.alert(
      'Location',
      'Choose your delivery location',
      [
        { text: 'Mumbai', onPress: () => setLocation('Mumbai, India') },
        { text: 'Delhi', onPress: () => setLocation('Delhi, India') },
        { text: 'Bangalore', onPress: () => setLocation('Bangalore, India') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handlePlaceOrder = () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Please enter a medicine name to search');
      return;
    }
    router.push('/features/delivery');
  };

  const filteredMedicines = popularMedicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medicine.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    router.push(`/categories/${category.name.toLowerCase()}`);
  };

  const handleSeeAllPress = () => {
    router.push('/categories/all-medicines');
  };

  const handleOrderNow = () => {
    router.push('/features/delivery');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2193b0', '#6dd5ed']}
        style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&q=80' }}
              style={styles.logo}
            />
            <Text style={styles.logoText}>MediSwift</Text>
          </View>
          <TouchableOpacity style={styles.locationButton} onPress={handleLocationPress}>
            <Ionicons name="location-outline" size={20} color="#FFF" />
            <Text style={styles.locationText}>{location}</Text>
            <Ionicons name="chevron-down" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>
          Swift Medicine Delivery{'\n'}At Your Fingertips
        </Text>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search medicines..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#666"
            />
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handlePlaceOrder}>
            <Text style={styles.searchButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80' }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Special Offer!</Text>
            <Text style={styles.bannerText}>Get 20% off on your first order</Text>
            <TouchableOpacity 
              style={styles.bannerButton}
              onPress={handleOrderNow}
            >
              <Text style={styles.bannerButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.categoryCard}
                activeOpacity={0.7}
                onPress={() => handleCategoryPress(category)}
              >
                <LinearGradient
                  colors={category.colors}
                  style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="#FFF" />
                </LinearGradient>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Medicines</Text>
            <TouchableOpacity onPress={handleSeeAllPress}>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredMedicines.map((medicine, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.medicineCard}
                activeOpacity={0.8}
                onPress={() => router.push(`/medicines/${medicine.name.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <Image 
                  source={{ uri: medicine.image }} 
                  style={styles.medicineImage}
                  resizeMode="cover"
                />
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
          </ScrollView>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.serviceCard}
                activeOpacity={0.7}
                onPress={() => router.push(service.route)}
              >
                <LinearGradient
                  colors={service.colors}
                  style={styles.serviceIcon}>
                  <Ionicons name={service.icon} size={24} color="#FFF" />
                </LinearGradient>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.teamSection}>
          <LinearGradient
            colors={['#2193b0', '#6dd5ed']}
            style={styles.teamContainer}>
            <Text style={styles.teamTitle}>Developed by</Text>
            <Text style={styles.teamName}>Synergy Hackers</Text>
            <Text style={styles.teamDescription}>Innovating Healthcare Delivery</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const categories = [
  { 
    name: 'Prescription',
    icon: 'document-text-outline',
    colors: ['#FF6B6B', '#EE5253'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80'
  },
  { 
    name: 'Vitamins',
    icon: 'fitness-outline',
    colors: ['#4834D4', '#686DE0'],
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80'
  },
  { 
    name: 'Healthcare',
    icon: 'medical-outline',
    colors: ['#6AB04C', '#BADC58'],
    image: 'https://images.unsplash.com/photo-1583912267550-82cef33c7412?w=800&q=80'
  },
  { 
    name: 'First Aid',
    icon: 'bandage-outline',
    colors: ['#EB4D4B', '#FF7979'],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80'
  },
  { 
    name: 'Baby Care',
    icon: 'happy-outline',
    colors: ['#F0932B', '#FFBE76'],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80'
  }
];

const popularMedicines = [
  {
    name: 'Paracetamol Extra',
    description: 'Pain Relief Tablet',
    price: '199',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  },
  {
    name: 'Vitamin C 1000mg',
    description: 'Immunity Booster',
    price: '499',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
  },
  {
    name: 'First Aid Kit',
    description: 'Emergency Kit',
    price: '999',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80',
  },
];

const services = [
  {
    name: '24/7 Delivery',
    description: 'Get medicines delivered anytime',
    icon: 'time-outline',
    colors: ['#FF6B6B', '#EE5253'],
    route: '/features/delivery',
  },
  {
    name: 'Online Doctor',
    description: 'Consult with experts',
    icon: 'medical-outline',
    colors: ['#4834D4', '#686DE0'],
    route: '/features/doctor',
  },
  {
    name: 'Lab Tests',
    description: 'Book tests at home',
    icon: 'flask-outline',
    colors: ['#6AB04C', '#BADC58'],
    route: '/features/lab-tests',
  },
  {
    name: 'Health Blog',
    description: 'Latest health updates',
    icon: 'newspaper-outline',
    colors: ['#F0932B', '#FFBE76'],
    route: '/features/blog',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  locationText: {
    marginHorizontal: 5,
    fontSize: 14,
    color: '#FFF',
    fontWeight: '500',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
    lineHeight: 36,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#2D3436',
  },
  searchButton: {
    backgroundColor: '#2193b0',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  searchButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  bannerContainer: {
    margin: 20,
    marginTop: 0,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  bannerImage: {
    width: '100%',
    height: 180,
  },
  bannerContent: {
    padding: 20,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  bannerText: {
    fontSize: 16,
    color: '#636E72',
    marginTop: 5,
  },
  bannerButton: {
    backgroundColor: '#2193b0',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bannerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  categoriesSection: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  seeAllButton: {
    color: '#2193b0',
    fontSize: 16,
    fontWeight: '600',
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 90,
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  categoryName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3436',
    textAlign: 'center',
  },
  popularSection: {
    padding: 20,
  },
  medicineCard: {
    width: width * 0.65,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  medicineImage: {
    width: '100%',
    height: 180,
  },
  medicineInfo: {
    padding: 15,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
  },
  medicineDescription: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 5,
  },
  medicineBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  medicinePrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2193b0',
  },
  addButton: {
    backgroundColor: '#2193b0',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  featuredSection: {
    padding: 20,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  serviceCard: {
    width: (width - 60) / 2,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3436',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 5,
  },
  teamSection: {
    padding: 20,
    paddingBottom: 40,
  },
  teamContainer: {
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
  },
  teamTitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  teamDescription: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.9,
    marginTop: 5,
  },
});
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding COVID-19 Vaccination',
    excerpt: 'Learn about the latest developments in COVID-19 vaccines and boosters.',
    image: 'https://images.unsplash.com/photo-1618961734760-466979ce35b0?w=800&q=80',
    readTime: '5 min read',
    date: 'Mar 15, 2024',
  },
  {
    id: 2,
    title: 'Mental Health in Modern Times',
    excerpt: 'Tips for maintaining mental wellness in today\'s fast-paced world.',
    image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80',
    readTime: '4 min read',
    date: 'Mar 14, 2024',
  },
  {
    id: 3,
    title: 'Healthy Diet for Immunity',
    excerpt: 'Foods that can help boost your immune system naturally.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    readTime: '6 min read',
    date: 'Mar 13, 2024',
  },
  {
    id: 4,
    title: 'Exercise and Heart Health',
    excerpt: 'The importance of regular exercise for cardiovascular health.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    readTime: '7 min read',
    date: 'Mar 12, 2024',
  },
  {
    id: 5,
    title: 'Sleep and Productivity',
    excerpt: 'How quality sleep affects your daily performance and health.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80',
    readTime: '5 min read',
    date: 'Mar 11, 2024',
  },
  {
    id: 6,
    title: 'Stress Management Techniques',
    excerpt: 'Effective ways to manage stress in daily life.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    readTime: '8 min read',
    date: 'Mar 10, 2024',
  },
  {
    id: 7,
    title: 'Diabetes Prevention',
    excerpt: 'Lifestyle changes to reduce diabetes risk.',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80',
    readTime: '6 min read',
    date: 'Mar 9, 2024',
  },
  {
    id: 8,
    title: "Children's Health Guide",
    excerpt: "Essential tips for maintaining children's health and wellness.",
    image: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=800&q=80',
    readTime: '7 min read',
    date: 'Mar 8, 2024',
  },
  {
    id: 9,
    title: 'Aging Gracefully',
    excerpt: 'Tips for maintaining health and vitality as you age.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
    readTime: '5 min read',
    date: 'Mar 7, 2024',
  },
  {
    id: 10,
    title: 'Mindful Living',
    excerpt: 'Incorporating mindfulness into your daily routine.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    readTime: '6 min read',
    date: 'Mar 6, 2024',
  },
];

export default function BlogScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2193b0" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Health Blog</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {blogPosts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.blogCard}>
            <Image source={{ uri: post.image }} style={styles.blogImage} />
            <View style={styles.blogContent}>
              <Text style={styles.blogTitle}>{post.title}</Text>
              <Text style={styles.blogExcerpt}>{post.excerpt}</Text>
              <View style={styles.blogMeta}>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.metaText}>{post.readTime}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.metaText}>{post.date}</Text>
                </View>
              </View>
            </View>
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
  blogCard: {
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
  blogImage: {
    width: '100%',
    height: 200,
  },
  blogContent: {
    padding: 15,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 14,
    color: '#636E72',
    lineHeight: 20,
    marginBottom: 12,
  },
  blogMeta: {
    flexDirection: 'row',
    marginTop: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  metaText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
});
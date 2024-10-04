import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView, FlatList } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Home Screen
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Bar: Heading and Icons */}
        <View style={styles.topBar}>
          <Text style={styles.heading}>Sports Shoes</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome name="heart-o" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="cart-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialIcons name="notifications-none" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Panel */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search items" style={styles.searchInput} />
        </View>

        {/* Wallet Balance and Top-up */}
        <View style={styles.walletContainer}>
          <Text style={styles.walletText}>Wallet Balance: Rp1,000,000</Text>
          <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top up</Text>
          </TouchableOpacity>
        </View>

        {/* Shop by Category Section */}
        <Text style={styles.sectionHeading}>Shop by Category</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Footwear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Bags</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Apparel</Text>
          </TouchableOpacity>
        </View>

        {/* For You Section */}
        <Text style={styles.sectionHeading}>For You</Text>
        <View style={styles.forYouContainer}>
          <View style={styles.productCard}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
            <Text style={styles.productTitle}>Air Legging Sport</Text>
            <Text style={styles.productCategory}>Apparel</Text>
            <Text style={styles.productPrice}>Rp200,000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Wishlist Screen
const products = [
  { id: '1', title: 'AERO SPORT INFINITY PRO', category: 'Footwear', price: 'Rp400.000', image: 'https://rockrun.com/cdn/shop/articles/2_1600x.jpg?v=1716296628' },
  { id: '2', title: 'SPORT+ INVINCIBLE PRO', category: 'Footwear', price: 'Rp389.000', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTRQx31FmG0ixAlsHQ0O0aFFyDejMxMHzTVmYcWzztMlThi1q42yfQTjyp-H17pzODH9h0qw865wAZderaQi5xTg2twfExXfSOilCuD936zRy4Pum-MtWqyrA' },
];

const ProductCard = ({ title, category, price, image }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productCategory}>{category}</Text>
    <Text style={styles.productPrice}>{price}</Text>
  </View>
);

function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard title={item.title} category={item.category} price={item.price} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
}

// Notification Screen
function NotificationScreen() {
  const notifications = [
    { date: 'Today, 10:20', title: 'LIMITED-TIME PROMO - UP TO 50% OFF!', message: 'Don\'t miss out on this special opportunity!' },
    { date: 'Today, 09:05', title: 'FLASH SALE ALERT - SAVE BIG TODAY!', message: 'Hurry, our flash sale is live now!' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NOTIFICATION</Text>
        <TouchableOpacity>
          <Text style={styles.markAsRead}> Mark as read </Text>
        </TouchableOpacity>
      </View>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.notificationCard}>
          <Text style={styles.date}>{notification.date}</Text>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.message}>{notification.message}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// Tab Navigation
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Common styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  scrollContainer: { paddingBottom: 20, paddingHorizontal: 20 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#FF4500' },
  iconContainer: { flexDirection: 'row' },
  icon: { marginLeft: 15 },
  searchContainer: { backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 20 },
  searchInput: { fontSize: 16 },
  walletContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  walletText: { fontSize: 18, color: '#333' },
  topUpButton: { backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  topUpText: { color: '#fff', fontWeight: 'bold' },
  sectionHeading: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  categoryItem: { alignItems: 'center' },
  categoryImage: { width: 50, height: 50, borderRadius: 10, marginBottom: 5 },
  categoryText: { fontSize: 14, color: '#333' },
  forYouContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 15 },
  productImage: { width: '100%', height: 120, borderRadius: 10, marginBottom: 10 },
  productTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  productCategory: { fontSize: 14, color: '#666' },
  productPrice: { fontSize: 14, fontWeight: 'bold', color: '#E74C3C', marginTop: 5 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 },
  headerText: { fontSize: 20, fontWeight: 'bold' },
  markAsRead: { fontSize: 16, color: 'orange' },
  notificationCard: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 10 },
  date: { fontSize: 12, color: '#555' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 5 },
  message: { fontSize: 14, color: '#555', marginTop: 3 },
});
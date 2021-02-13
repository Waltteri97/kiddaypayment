// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import {ActivityIndicator, StatusBar, StyleSheet, View, Button} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import FirstPage from './pages/Login';
// import SignupPage from './pages/Signup';
// import Secondpage from './pages/Homepage';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';


// const RootStack = createStackNavigator(
//   {
//     Login: FirstPage,
//     Homepage: Secondpage,
//     Signup: SignupPage,
    

//   },
//   {
//     defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: '#0F194F'
//         },
//         hearedTintColor: '#fff',
//         headerShown: false,
//         hearedTitleStyle: {
//           textAlign: 'center',
//           flex: 1
//         }
        
//     }
//   },
// );

// const AuthStack = createStackNavigator({Home: FirstPage})

// class AuthLoadingScreen extends Component{
//   constructor(props){
//     super(props)
//     this._loadData();
//   }

//   render() {
//     return(
//       <View style={styles.container}>
//         <ActivityIndicator/>
//         <StatusBar barStyle="default"/>
//       </View>
//     );
//   }
//   _loadData = async() => {
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       this.props.navigation.navigate(isLoggedIn !== '1'? 'Auth' : 'App');
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#db3056',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: RootStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }

// ));




// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import {ActivityIndicator, StatusBar, StyleSheet, View, Button} from 'react-native';

// export default class App extends React.Component {
  
//   componentDidMount() {
//     Purchases.setDebugLogsEnabled(true);
//     Purchases.setup("public_sdk_key");
//   }
  
// }

//         try {
//           const offerings = await Purchases.getOfferings();
//           if (offerings.current !== null) {  
//               // Display current offering with offerings.current
//           }
//         } catch (e) {

//         }

//         // Using packages
//         try {
//           const purchaseMade = await Purchases.purchasePackage(package);
//           if (typeof purchaseMade.purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
//             // Unlock that great "pro" content
//           }
//         } catch (e) {
//           if (!e.userCancelled) {
//             showError(e);
//           }
//         }

//         // Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this
//         await Purchases.purchaseProduct("product_id", null, Purchases.PURCHASE_TYPE.INAPP);


//         try {
//           const purchaserInfo = await Purchases.getPurchaserInfo();
//           if(typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
//             // Grant user "pro" access
//           }
//         } catch (e) {
//         // Error fetching purchaser info
//         }

//         try {
//           const restore = await Purchases.restoreTransactions();
//           // ... check restored purchaserInfo to see if entitlement is now active
//         } catch (e) {

//         }

//         Purchases.addPurchaserInfoUpdateListener(info => {
//           // handle any changes to purchaserInfo
//         });


//         try {
//           const offerings = await Purchases.getOfferings();
//           if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {
//             // Display packages for sale
//           }
//         } catch (e) {
        
//         }

//         try {
//           const offerings = await Purchases.getOfferings();
//           if (offerings.all["experiment_group"].availablePackages.length !== 0) {
//             // Display packages for sale
//           }
//         } catch (e) {
        
//         }

//         // Accessing the monthly product// Displaying the monthly product

//         try {
//           const offerings = await Purchases.getOfferings();
//           if (offerings.current && offerings.current.monthly) {
//             const product = offerings.current.monthly;
//             // Get the price and introductory period from the PurchasesProduct
//           }
//         } catch (e) {
        
//         }

//         // Using packages
//         try {
//           const {purchaserInfo, productIdentifier} = await Purchases.purchasePackage(package);
//           if (typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
//             // Unlock that great "pro" content
//           }
//         } catch (e) {
//           if (!e.userCancelled) {
//             showError(e);
//           }
//         }

//         // Note: if you are using purchaseProduct to purchase Android In-app products, an optional third parameter needs to be provided when calling purchaseProduct. You can use the package system to avoid this
//         await Purchases.purchaseProduct("product_id", null, Purchases.PURCHASE_TYPE.INAPP);


//         try {
//           const restore = await Purchases.restoreTransactions();
//           // ... check restored purchaserInfo to see if entitlement is now active
//         } catch (e) {

//         }

//         Purchases.setup("e6b2f73455ee2b663313f3c926f640ea6fbf2569");

//         Purchases.setup("e6b2f73455ee2b663313f3c926f640ea6fbf2569", "my_app_user_id");

//         // Configure Purchases on app launch
//         Purchases.setup("pe6b2f73455ee2b663313f3c926f640ea6fbf2569");

//         //...

//         // Later log in provided user Id
//         const purchaserInfo = await Purchases.identify("my_app_user_id");
//         // purchaserInfo updated for my_app_user_id

//         Purchases.setAttributes({ "age" : "24", "custom_group_id" : "abc123" });

//         Purchases.setEmail("test@example.com")
//         Purchases.setPhoneNumber("+16505551234")
//         Purchases.setDisplayName("John Appleseed")
//         Purchases.setPushToken(deviceToken)

//         Purchases.setAttributes({"age" : ""})

//         try {
//           const purchaserInfo = await Purchases.getPurchaserInfo();
//           // access latest purchaserInfo
//         } catch (e) {
//         // Error fetching purchaser info
//         }

//         if(typeof purchaserInfo.entitlements.active.my_entitlement_identifier !== "undefined") {
//           // Grant user "pro" access
//         }

//         if (Object.entries(purchaserInfo.entitlements.active).length) {
//           //user has access to some entitlement
//         }

//         Purchases.addPurchaserInfoUpdateListener((info) => {
//           // handle any changes to purchaserInfo
//         });



import * as RNIap from 'react-native-iap';
import RNIap, {PurchaseError} from 'react-native-iap';

const productIds = Platform.select({
  ios: [
    'com.example.coins100'
  ],
  android: [
    'com.example.coins100'
  ]
});

async componentDidMount() {
  try {
    const products: Product[] = await RNIap.getProducts(productIds);
    this.setState({ products });
  } catch(err) {
    console.warn(err); // standardized err.code and err.message available
  }
}

import RNIap, {
  purchaseErrorListener,
  purchaseUpdatedListener,
  ProductPurchase,
  PurchaseError
} from 'react-native-iap';

class App extends Component {
  purchaseUpdateSubscription = null
  purchaseErrorSubscription = null

  componentDidMount() {
    RNIap.initConnection().then(() => {
      // we make sure that "ghost" pending payment are removed
      // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)
      RNIap.flushFailedPurchasesCachedAsPendingAndroid().catch(() => {
        // exception can happen here if:
        // - there are pending purchases that are still pending (we can't consume a pending purchase)
        // in any case, you might not want to do anything special with the error
      }).then(() => {
        this.purchaseUpdateSubscription = purchaseUpdatedListener((purchase: InAppPurchase | SubscriptionPurchase | ProductPurchase ) => {
          console.log('purchaseUpdatedListener', purchase);
          const receipt = purchase.transactionReceipt;
          if (receipt) {
            yourAPI.deliverOrDownloadFancyInAppPurchase(purchase.transactionReceipt)
            .then( async (deliveryResult) => {
              if (isSuccess(deliveryResult)) {
                // Tell the store that you have delivered what has been paid for.
                // Failure to do this will result in the purchase being refunded on Android and
                // the purchase event will reappear on every relaunch of the app until you succeed
                // in doing the below. It will also be impossible for the user to purchase consumables
                // again until you do this.
                if (Platform.OS === 'ios') {
                  await RNIap.finishTransactionIOS(purchase.transactionId);
                } else if (Platform.OS === 'android') {
                  // If consumable (can be purchased again)
                  await RNIap.consumePurchaseAndroid(purchase.purchaseToken);
                  // If not consumable
                  await RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
                }

                // From react-native-iap@4.1.0 you can simplify above `method`. Try to wrap the statement with `try` and `catch` to also grab the `error` message.
                // If consumable (can be purchased again)
                await RNIap.finishTransaction(purchase, true);
                // If not consumable
                await RNIap.finishTransaction(purchase, false);
              } else {
                // Retry / conclude the purchase is fraudulent, etc...
              }
            });
          }
        });

        this.purchaseErrorSubscription = purchaseErrorListener((error: PurchaseError) => {
          console.warn('purchaseErrorListener', error);
        });
      })
    })
  }

  componentWillUnmount() {
    if (this.purchaseUpdateSubscription) {
      this.purchaseUpdateSubscription.remove();
      this.purchaseUpdateSubscription = null;
    }
    if (this.purchaseErrorSubscription) {
      this.purchaseErrorSubscription.remove();
      this.purchaseErrorSubscription = null;
    }
  }
}


requestPurchase = async (sku: string) => {
  try {
    await RNIap.requestPurchase(sku, false);
  } catch (err) {
    console.warn(err.code, err.message);
  }
}

requestSubscription = async (sku: string) => {
  try {
    await RNIap.requestSubscription(sku);
  } catch (err) {
    console.warn(err.code, err.message);
  }
}

render() {
  ...
    onPress={() => this.requestPurchase(product.productId)}
  ...
}




getPurchases = async () => {
  try {
    const purchases = await RNIap.getAvailablePurchases();
    const newState = { premium: false, ads: true }
    let restoredTitles = [];

    purchases.forEach(purchase => {
      switch (purchase.productId) {
      case 'com.example.premium':
        newState.premium = true
        restoredTitles.push('Premium Version');
        break

      case 'com.example.no_ads':
        newState.ads = false
        restoredTitles.push('No Ads');
        break

      case 'com.example.coins100':
        await RNIap.consumePurchaseAndroid(purchase.purchaseToken);
        CoinStore.addCoins(100);
      }
    })

    Alert.alert('Restore Successful', 'You successfully restored the following purchases: ' + restoredTitles.join(', '));
  } catch(err) {
    console.warn(err); // standardized err.code and err.message available
    Alert.alert(err.message);
  }
}

const receiptBody = {
  'receipt-data': purchase.transactionReceipt,
  'password': '******'
};
const result = await RNIap.validateReceiptIos(receiptBody, false);
console.log(result);




























// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import LoginPage from './pages/Login.js'

// export default function App() {
//   return (
//     <LoginPage/>
//   );
// }



// import React, { Component } from 'react';
// import {View, StyleSheet} from 'react-native'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';

// import SecondPage from './pages/Fillings';
// import FirstPage from './pages/Login';

// const App = createStackNavigator({
//     FirstPage: { screen: FirstPage }, 
//     SecondPage: { screen: SecondPage }, 
//   },
//   {
//     initialRouteName: 'FirstPage',
//   }
// );
// export default createAppContainer(App);





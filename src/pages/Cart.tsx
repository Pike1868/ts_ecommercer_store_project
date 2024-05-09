import { useAppSelector } from '@/hooks';
import { CartItemsList, SectionTitle, CartTotals } from '@/components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const user = useAppSelector((state)=>state.userState.user)
  const numItemsInCart = useAppSelector((state)=> state.cartState.numItemsInCart)
  if(numItemsInCart === 0){
    return <SectionTitle text="Empty cart" />;
  }
  
  return (
   <>
    <SectionTitle text="Shopping Cart"/>
    <div className="grid gap-8 mt-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemsList />  
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
          <Button asChild className="w-full mt-8">
            {user ? (
              <Link to='/checkout'> Proceed to checkout</Link>
              ) : (
              <Link to='/login'>Please Login</Link>
              )}
          </Button>
      </div>
    </div>
   </>
  )
}

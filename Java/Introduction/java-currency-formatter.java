import java.util.*;
import java.text.*;

public class Solution {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        
        // Write your code here.
        NumberFormat usFormatter = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat chinaFormatter = NumberFormat.getCurrencyInstance(Locale.CHINA);
        
        Locale indianLocale = new Locale("en", "IN");
        NumberFormat indiaFormatter = NumberFormat.getCurrencyInstance(indianLocale);
        
        NumberFormat franceFormatter = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        
        System.out.println("US: " + usFormatter.format(payment));
        System.out.println("India: " + indiaFormatter.format(payment));
        System.out.println("China: " + chinaFormatter.format(payment));
        System.out.println("France: " + franceFormatter.format(payment));
    }
}
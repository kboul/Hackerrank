import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.lang.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String month = in.next();
        String day = in.next();
        String year = in.next();
        
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.DAY_OF_MONTH, Integer.parseInt(day)); //Set Day of the Month, 1..31
        cal.set(Calendar.MONTH, Integer.parseInt(month)-1); //Set month, starts with JANUARY = 0
        cal.set(Calendar.YEAR, Integer.parseInt(year)); //Set year
        int d = cal.get(cal.DAY_OF_WEEK);
        switch (d) {
            case 1:
                System.out.print("Sunday".toUpperCase());
                break;
            case 2:
                System.out.print("Monday".toUpperCase());
                break;
            case 3:
                System.out.print("Tuesday".toUpperCase());
                break;
            case 4:
                System.out.print("Wednesday".toUpperCase());
                break;
            case 5:
                System.out.print("Thursday".toUpperCase());
                break;
            case 6:
                System.out.print("Friday".toUpperCase());
                break;
            case 7:
                System.out.print("Saturday".toUpperCase());
        }
    }
}
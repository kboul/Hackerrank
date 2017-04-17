public static int B;
public static int H;
public static boolean flag;

static {
    Scanner scanner = new Scanner(System.in);
    B = scanner.nextInt();
    H = scanner.nextInt();
    
    if (B > 0 && H > 0) {
        flag = true;
    }
    else {
        flag = false;
        System.out.println("java.lang.Exception: Breadth and height must be positive");
    }
}
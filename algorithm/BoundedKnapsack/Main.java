public class Main {
//    public static int boundedKnapsack(int W, int N, int[] w, int[] v, int[] n) {
//        int[] dp = new int[W + 1];
//        for (int i = 0; i < N; i++) {
//            for (int j = W; j >= 0; j--) {
//                for (int k = 0; k <= n[i] && k * w[i] <= j; k ++) {
//                    if (dp[j - k * w[i]] + k * v[i] > dp[j]) {
//                        dp[j] = dp[j - k * w[i]] + k * v[i];
//                    }
//                }
//            }
//        }
//        return dp[W];
//    }
    public static int boundedKnapsack(int W, int N, int[] w, int[] v, int[] n) {
        int[] dp = new int[W + 1];
        int count;
        for (int i = 0; i < N; i++) {
            count = 0;
            for (int j = w[i]; j <= W; j++) {
                if (j >= w[i]) {
                    if (count < n[i] && v[i] + dp[j - w[i]] > dp[j]) {
                        dp[j] = v[i] + dp[j - w[i]];
                        count++;
                    }
                }
            }
        }
        return dp[W];
    }

    public static void main(String[] args) {
        int W = 13;
        int N = 5;
        int[] w = new int[]{3, 4, 5, 6, 7};
        int[] v = new int[]{5, 6, 9, 10, 11};
        int[] n = new int[]{1, 5, 1, 5, 5};
        int ret = boundedKnapsack(W, N, w, v, n);
        System.out.println(ret); //21
    }
}
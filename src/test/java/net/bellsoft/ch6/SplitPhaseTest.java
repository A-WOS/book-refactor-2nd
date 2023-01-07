package net.bellsoft.ch6;

import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SplitPhaseTest {
    @Test
    public void testDisplayZeroForEmptyOrders() throws IOException {
        assertEquals(SplitPhase.run(new String[]{"./src/test/java/net/bellsoft/ch6/emptyOrders.json"}), 0);
    }

    @Test
    public void testDisplayCountForAllOrders() throws IOException {
        assertEquals(SplitPhase.run(new String[]{"./src/test/java/net/bellsoft/ch6/mixedReadyAndNotReadyOrders.json"}), 3);
    }

    @Test
    public void testDisplayCountOnlyForReadyOrders() throws IOException {
        assertEquals(SplitPhase.run(new String[]{"-r", "./src/test/java/net/bellsoft/ch6/oneReadyAndOneNotReadyOrders.json"}), 1);
    }
}

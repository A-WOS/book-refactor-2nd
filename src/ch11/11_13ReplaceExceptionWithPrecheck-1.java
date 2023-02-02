// 자바 기준으로 작성되었음

class ResuourecePool {
    public Resource get() {
        Resource result;
        if (available.isEmpty()) {
            result = Resource.create();
            allocated.add(result);
        } else {
            result = available.pop();
            allocated.add(result);
        }
        return result;
    }
}

private Deque<Resource> available;
private List<Resource> allocated;
